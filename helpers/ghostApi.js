import GhostContentAPI from "@tryghost/content-api";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

const api = new GhostContentAPI({
    // url: BLOG_URL,
    // key: CONTENT_API_KEY,
    url: 'http://localhost:2368',
    key: '63bae8655b3b9e3c1c83ae8b0b',
    version: "v5.0"
});

export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
}

export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all",
        include: "id,slug,title",
      })
      .catch(err => {
        console.error(err);
      });
  }