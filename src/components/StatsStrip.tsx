import Container from "./Container";

export default function StatsStrip() {
  const stats = [
    { label: "Clinics Still Paper-Based", value: "80%" },
    { label: "Connectivity Drops in Rural Areas", value: "60%" },
    { label: "Reduction in Admin Time (Pilot)", value: "40%" },
  ];

  return (
    <section className="bg-[#103D54] text-white py-24">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-[#FF6B6B] transition">
              <div className="text-4xl font-bold text-[#FF6B6B] mb-2">{stat.value}</div>
              <div className="text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
