export function ReactEvent() {
  function hello(event) {
    console.log('Hello', event);
  }

  const fn = () => {
    console.log('Hello', name);
  }

  return (
    <>
      <h1>ReactEvent</h1>
      <p>ReactEvent is a functional component.</p>
      <button onClick={() => fn()}>Say Welcome 1</button>
      <button onClick={hello}>Say Welcome 2</button>
      <button onClick={hello.bind(this, 'wdwq')}>Say Welcome 3</button>
    </>
  )
}
