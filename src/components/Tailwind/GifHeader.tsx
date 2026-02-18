


export default function GifHeader() {

  return (
<div className="relative h-[60vh] overflow-hidden">
  <img
    src="/gifs/project-bg.gif"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center text-center">
    <h1 className="text-5xl font-bold text-white">
      Project Name
    </h1>
  </div>
</div>
  )
}