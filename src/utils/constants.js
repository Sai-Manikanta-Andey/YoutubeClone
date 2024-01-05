const API_KEY = "AIzaSyCJppvgodfIq51xC34zSsg3j2dGfp2tDWg";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +API_KEY;

export const YOUTUBE_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" ; 

export const YOUTUBE_LIVE_CHAT_API =
  "https://youtube.googleapis.com/youtube/v3/liveChat/messages?key=AIzaSyDJV2XFQdFv0NwymBu5e7eNUUd3ewadG_c"

//  https://youtube.googleapis.com/youtube/v3/search
// ?part=snippet
// &q=YOUR_SEARCH_TERM  // Replace YOUR_SEARCH_TERM with the actual search term entered by the user
// &type=video
// &maxResults=50
// &regionCode=IN
// &key=

//https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=
export const YOUTUBE_SEARCH_VIDEO_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=YOUR_SEARCH_TERM&type=video&maxResults=50&regionCode=IN&key=" +
  API_KEY;
