<!-- JavaScript -->

  <script>
    // 커스텀 커서 생성
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.textContent = 'Type Lovers'; // 커서 텍스트
    document.body.appendChild(cursor);

    // 마우스 움직임 감지 및 커서 위치 업데이트
    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // 커서 위치를 마우스 위치로 이동
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });
  </script>s