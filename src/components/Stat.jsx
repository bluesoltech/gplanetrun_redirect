const stats = [
  { id: 1, name: "Last Year Participation", value: "5000+" },
  { id: 2, name: "Last Year Prizes Awarded of value", value: "₹100000+" },
  { id: 3, name: "Number of Sponsors Last Year", value: "16+" },
];

export default function Stat() {
  return (
    <div className=" bg-[#273775] py-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-2 text-white">{stat.name}</dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
