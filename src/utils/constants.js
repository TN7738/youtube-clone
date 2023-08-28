export const YOUTUBE_API_KEY = 'AIzaSyD3mM5PnioIxHO1ad9rP0B_c-DE_Jm8d5o';

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=1000&key=' + YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = 'https://corsproxy.io/?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_VIDEO_SEARCH_RESULTS_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=';