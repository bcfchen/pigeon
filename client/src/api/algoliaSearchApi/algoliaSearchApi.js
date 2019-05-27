import algoliaSearch from 'algoliasearch';
import { addErrorMessage } from '../../redux/actions/errorHandlerActions';
import config from '../../config';
import * as textUtils from '../../utilities/textUtils';
import AlgoliaSearchResponse from "../../models/core/AlgoliaSearchResponse";
class AlgoliaSearchClient {
    constructor() {
        const client = algoliaSearch(config.algolia.APP_ID, config.algolia.API_KEY);
        this.index = client.initIndex(config.algolia.INDEX_NAME);
        this.autoTagsIndex = client.initIndex(config.algolia.AUTO_TAGS_INDEX_NAME);
    }
}

const searchClient = new AlgoliaSearchClient();

export const queryAutoTags = (publicId, dispatch) => {
    const facetFilterArray = [`objectID:${publicId}`];
    return searchClient.autoTagsIndex.search({ query: '', facetFilters: [facetFilterArray] })
        .then(response => {
            const hasAutoTags = response && response.hits && response.hits.length > 0;
            return hasAutoTags ? response.hits[0].autoTags : [];
        })
        .catch(err => {
            dispatch(addErrorMessage(err.message || err));
            throw (err);
        });
};

export const searchAssetsByPublicIdsPaginated = async (searchText, publicIds, pageNumber) => {
    const facetFilterArray = publicIds.reduce((filtersArr, publicId) => {
        return [...filtersArr, `public_id:${publicId}`];
    }, []);

    const searchResponse = await searchClient.index.search({ query: searchText, facetFilters: [facetFilterArray], page: pageNumber, hitsPerPage: 30 });
    return AlgoliaSearchResponse.fromResponse(searchResponse);
};

export const searchAssetsByTextAndProjectIdsPaginated = async (searchText, pageNumber, projectIds) => {
    if (!searchText) {
        searchText = '';
    }
    const filterStr = textUtils.buildProjectIdFilterString(projectIds);
    const searchResponse = await searchClient.index.search({ query: searchText, filters: filterStr, page: pageNumber, hitsPerPage: 30 });
    return AlgoliaSearchResponse.fromResponse(searchResponse);
};

export const searchAssetsByPublicIds = async (publicIds) => {
    const facetFilterArray = publicIds.reduce((filtersArr, publicId) => {
        return [...filtersArr, `public_id:${publicId}`];
    }, []);

    const searchResponse = await searchClient.index.search({ query: "", facetFilters: [facetFilterArray] });
    return AlgoliaSearchResponse.fromResponse(searchResponse);
};