const API_KEY = "AIzaSyDJV2XFQdFv0NwymBu5e7eNUUd3ewadG_c";
export const YOUTUBE_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+
  API_KEY; ;

export const YOUTUBE_SUGGESTION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_LIVE_CHAT_API =
  "https://youtube.googleapis.com/youtube/v3/liveChat/messages?key="+API_KEY;

  //  https://youtube.googleapis.com/youtube/v3/search
  // ?part=snippet
  // &q=YOUR_SEARCH_TERM  // Replace YOUR_SEARCH_TERM with the actual search term entered by the user
  // &type=video
  // &maxResults=50
  // &regionCode=IN
  // &key=

  export const YOUTUBE_SEARCH_VIDEO_RESULTS_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=YOUR_SEARCH_TERM&type=video&maxResults=50&regionCode=IN&key="+API_KEY