document.addEventListener('DOMContentLoaded', function() {
  // 获取编号元素
  const cageNumber = document.getElementById('cage-number');
  const roomNumber = document.getElementById('room-number');
  const warehouseNumber = document.getElementById('warehouse-number');
  const fullId = document.getElementById('full-id');
  
  // 默认编号
  const defaultCage = 'A123';
  const defaultRoom = 'R01';
  const defaultWarehouse = 'W05';
  
  // 如果需要从URL参数中读取编号
  const urlParams = new URLSearchParams(window.location.search);
  const cageParam = urlParams.get('cage') || defaultCage;
  const roomParam = urlParams.get('room') || defaultRoom;
  const warehouseParam = urlParams.get('warehouse') || defaultWarehouse;
  
  // 设置显示的编号
  cageNumber.textContent = cageParam;
  roomNumber.textContent = roomParam;
  warehouseNumber.textContent = warehouseParam;
  
  // 生成完整编号
  const completeId = `${warehouseParam}-${roomParam}-${cageParam}`;
  fullId.textContent = completeId;
  
  // 生成二维码
  generateQRCode(completeId);
  
  // 创建猫爪图标（如果没有外部SVG文件）
  createPawIcon();
});

// 生成二维码的函数
function generateQRCode(text) {
  const qrcodeElement = document.getElementById('qrcode');
  
  // 清空原有内容
  qrcodeElement.innerHTML = '';
  
  // 使用QRCode.js库生成二维码
  QRCode.toCanvas(qrcodeElement, text, {
    width: 188, // 约等于5cm的像素大小（以96dpi计算）
    margin: 1,
    color: {
      dark: '#000',
      light: '#fff'
    }
  }, function(error) {
    if (error) console.error(error);
  });
}

// 创建猫爪图标的函数（内联SVG）
function createPawIcon() {
  const iconElement = document.querySelector('.paw-icon');
  
  // 如果没有找到外部图标，创建内联SVG
  if (!iconElement.src || iconElement.naturalWidth === 0) {
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#555">
        <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5.3-86.2 32.6-96.8 70.1 15.6 84.4 58.5zm22.8 60.7C254.1 135.4 246.3 96 212.3 81.8s-67.2 8.8-72.1 26.9 6.1 40.4 40.1 54.6 67.2-8.8 72.1-26.9z"/>
        <path d="M100.4 198.6c18.2 5.4 29.6 24.7 28.7 48.7s-13.7 41-31.8 44.6-36.3-8.2-46.4-27.2 1.7-64.4 49.5-66.1z"/>
        <path d="M69.9 401.1c-6.8-24 10.9-53.1 39.6-65.2s57.1-1.2 65.4 25.3-5.3 60.2-35.1 73.2-63 11.1-69.9-33.3z"/>
        <path d="M379.9 93.1c30.8 19-18.3 103.9-36.9 93.1-18.6-10.8-7.8-76.3 36.9-93.1z"/>
        <path d="M279.9 404.5c-24-6.8-42.7-22.3-39.1-57.9 3.6-28.6 27.5-44.6 51.6-36.4s27.3 47.8 14.4 76.7-3.3 24.7-26.9 17.6z"/>
        <path d="M411.8 200.5c30.8 4.8 54-7.9 61.9-37.2 3.6-28.6-15.2-55.8-43.5-61.1-28.3-5.2-59.6 4.3-65.4 32.9-5.6 28.6 16.6 61 47 65.4z"/>
      </svg>
    `;
    
    iconElement.outerHTML = svgContent;
    
    // 设置SVG样式
    const svg = document.querySelector('svg');
    svg.style.width = '1.2cm';
    svg.style.height = '1.2cm';
    svg.classList.add('paw-icon');
  }
} 