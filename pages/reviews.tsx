export const reviews = () => {
  return (
    <div
      style={{
        width: '560px',
        height: '800px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <iframe
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid #e6e6e6',
          borderRadius: '8px',
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
          //   padding: '0 16px',
          //   boxSizing: 'border-box',
        }}
      >
        Отливчик на карте Мытищ — Яндекс Карты
      </a>
    </div>
  );
};

export default reviews;
