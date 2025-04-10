# 猫笼卡片生成器

这是一个简单的HTML猫笼卡片生成器，可以创建尺寸为14.5cm × 10.5cm的卡片，包含编号区域和二维码。

## 功能特点

- 固定尺寸设计（14.5cm × 10.5cm）
- 包含猫笼编号、房间编号、仓库编号和完整编号
- 自动生成包含完整编号的二维码
- 内置猫爪图标
- 支持打印（无边距）
- 响应式设计，适配不同设备

## 使用方法

1. 将所有文件下载到同一个目录
2. 在浏览器中打开 `index.html` 文件
3. 默认会显示示例编号和二维码

### 自定义编号

可以通过URL参数自定义编号：

```
index.html?cage=A456&room=R02&warehouse=W06
```

其中：
- `cage` 参数设置猫笼编号
- `room` 参数设置房间编号
- `warehouse` 参数设置仓库编号

### 打印卡片

1. 在浏览器中打开卡片
2. 按下 Ctrl+P（Windows/Linux）或 Cmd+P（Mac）
3. 在打印选项中选择"无边距"或"实际大小"
4. 确保打印尺寸设置为实际尺寸（不要缩放）

## 文件说明

- `index.html` - 主HTML文件
- `styles.css` - 样式文件，包含卡片的尺寸和样式
- `script.js` - JavaScript文件，用于生成二维码和处理参数

## 定制化

- 要更改卡片尺寸，修改 `styles.css` 中的 `.cat-card` 类的宽度和高度
- 要更改字体和颜色，修改 `styles.css` 中的相应样式
- 要更改默认编号，修改 `script.js` 中的默认值变量

## 技术说明

- 使用原生HTML、CSS和JavaScript
- 使用 [QRCode.js](https://github.com/davidshimjs/qrcodejs) 库生成二维码
- 使用CSS的cm单位确保打印尺寸准确 