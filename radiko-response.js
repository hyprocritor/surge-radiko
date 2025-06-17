if ($response.body) {
  try {
    const body = JSON.parse($response.body);

    body.is_timefree_plus = true;
    body.is_areafree = true;

    $done({ body: JSON.stringify(body) });
  } catch (e) {
    console.log("Response modify error:", e);
    $done({});
  }
} else {
  $done({});
}
