
const { add } = require('./index');

function testAdd() {
  const result = add(2, 3);
  if (result === 5) {
    console.log("✅ Test passed");
    process.exit(0);
  } else {
    console.error("❌ Test failed");
    process.exit(1);
  }
}

testAdd();
