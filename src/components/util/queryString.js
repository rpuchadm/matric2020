export default function queryString( str) {
    if( !str) return undefined;
    let qs = {};
    let parts = str.split('?');
    if( parts.length>1) {
      parts = parts[1].split('&');
      parts.map( function(part) {
        let fields = part.split('=');
        if( fields.length > 1) {
          qs[fields[0]]=fields[1];
        }
        return null;
      });
    }
    return qs;
  }
  