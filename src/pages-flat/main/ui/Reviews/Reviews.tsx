export const Reviews = () => {
  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full"
        style={{
          border: 'none',
          boxSizing: 'border-box',
        }}
        src="https://yandex.ru/maps-reviews-widget/184535784417?comments"
      ></iframe>
      <a
        href="https://yandex.ru/maps/org/otlivchik/184535784417/"
        target="_blank"
        rel=" noreferrer"
        style={{
          boxSizing: 'border-box',
          textDecoration: 'none',
          color: '#b3b3b3',
          fontSize: '10px',
          fontFamily: 'YS Text,sans-serif',
          padding: '0 20px',
          position: 'absolute',
          bottom: '8px',
          width: '100%',
          textAlign: 'center',
          left: '0',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'block',
          maxHeight: '14px',
          whiteSpace: 'nowrap',
        }}
      >
        Отливчик на карте Мытищ — Яндекс Карты
      </a>
    </div>
  );
};