import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <div className={s.header}>шапка</div>
      <div className={s.navbar}>список юзеров в чате с прокруткой</div>
      <div className={s.sidebar}>окно чата с прокруткой</div>
      <div className={s.footer}>подвал</div>
    </div>
  );
}

export default App;