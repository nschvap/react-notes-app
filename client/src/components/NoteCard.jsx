function TaskCard({ obj }) {
  return (
    <div className="px-3 py-4 bg-yellow-200 max-w-sm rounded-lg hover:bg-yellow-200/70 cursor-pointer active:scale-95">
      <p className="break-all font-bold text-zinc-700">{obj.title}</p>
      <p className="break-all font-semibold max-h-56 overflow-y-auto text-zinc-700 text-sm">{obj.description}</p>
    </div>
  );
}

export default TaskCard;
