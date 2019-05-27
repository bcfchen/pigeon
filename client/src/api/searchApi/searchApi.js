import axios from "axios";
import BlogPostItem from "../../models/BlogPostItem";
const config = require("../config.json");

export const searchPosts = async (searchText) => {
    let postsResponse = await axios.get(config.blogPostsUrl);
    if (!postsResponse || postsResponse.length === 0) { return []; }
    let blogPostItems = postsResponse.data.map(post => new BlogPostItem(post));

    return blogPostItems.filter(item => item.containsText(searchText));
};