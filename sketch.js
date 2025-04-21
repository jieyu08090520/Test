function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // 停止連續繪圖，背景只需生成一次
}

function draw() {
  background(220);
}

function mouseMoved() {
  background(220); // 清除畫布
  for (let i = 0; i < 40; i++) {
    push(); // 儲存當前繪圖狀態
    fill(random(255), random(255), random(255), random(150, 255)); // 隨機顏色與透明度
    noStroke();
    let size = map(mouseX, 0, width, 10, 100); // 根據滑鼠 X 座標調整大小
    let x = random(width);
    let y = random(height);
    translate(x, y); // 移動到隨機位置
    rotate(random(TWO_PI)); // 隨機旋轉角度
    let x1 = -size / 2, y1 = size / 2;
    let x2 = size / 2, y2 = size / 2;
    let x3 = 0, y3 = -size / 2;
    triangle(x1, y1, x2, y2, x3, y3);
    pop(); // 恢復繪圖狀態
  }
}
