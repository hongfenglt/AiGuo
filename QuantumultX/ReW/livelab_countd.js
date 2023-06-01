var body = $response.body;
var obj = JSON.parse(body);
obj['data'] = 0;
body = JSON.stringify(obj);
$done(body);