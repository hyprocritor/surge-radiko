// Tokyo coordinates
const TOKYO_LAT = 35.6895;
const TOKYO_LNG = 139.6917;

if ($request.body) {
  try {
    let body = JSON.parse($request.body);

    if (body && body.location) {
      body.location.latitude = TOKYO_LAT;
      body.location.longitude = TOKYO_LNG;

      $done({ body: JSON.stringify(body) });
    } else {
      $done({});
    }
  } catch (e) {
    console.log("Error modifying location:", e);
    $done({});
  }
} else {
  $done({});
}
