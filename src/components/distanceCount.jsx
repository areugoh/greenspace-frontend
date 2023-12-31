

export default function CountDistance({aquaticArea, distance, currentLocation}) {
  return (
    <div>
      <div className="w-auto mb-10">
        <p className="text-xl opacity-75 scale-100 text-center
        hover:opacity-100 hover:scale-110 transition-all duration-300">
          <strong>{Number(distance).toFixed(2)}Km</strong> away from <strong>{aquaticArea}</strong>!
        </p>
      </div>
    </div>
  );
}
