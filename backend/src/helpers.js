export function startApp(app) {
  return () => new Promise((resolve, reject) => {
    app.listen(process.env.PORT, process.env.HOST, resolve).on('error', reject);
  });
}

export function exitWithError(type) {
  return (err) => {
    console.error('❌', type, '-', err?.message);
    process.exit(1);
  };
}

export function log(type, message) {
  return () => {
    console.log('✅', type, '-', message);
  };
}