# CWD
cd svgbob

# Update WASM
wget -O svgbob.wasm https://unpkg.com/svgbob-wasm/svgbob_wasm_bg.wasm

# Update TS
echo "export default '$(base64 svgbob.wasm)';" > svgbob.js
