export default function HafalButton({ done, onToggle, small = false, tabIndex }) {
  return (
    <button
      type="button"
      className={`btn btn-hafal${done ? ' is-done' : ''}${small ? ' btn-small' : ''}`}
      aria-pressed={done}
      onClick={onToggle}
      tabIndex={tabIndex}
    >
      {done ? 'Sudah hafal' : 'Tandai hafal'}
    </button>
  );
}
