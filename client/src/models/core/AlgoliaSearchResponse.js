import AlgoliaAssetItem from './AlgoliaAssetItem';

class AlgoliaSearchResponse {
    constructor(items, numberOfHits) {
        this.items = items;
        this.numberOfHits = numberOfHits;
    }

    static fromResponse(rawResponse) {
        const responseEmpty = (!rawResponse || rawResponse.length === 0);
        const items = responseEmpty ? [] : rawResponse.hits.map(rawAssetItem => new AlgoliaAssetItem(rawAssetItem));
        const numberOfHits = responseEmpty ? 0 : rawResponse.nbHits;
        return new AlgoliaSearchResponse(items, numberOfHits);
    }
}

export default AlgoliaSearchResponse;
