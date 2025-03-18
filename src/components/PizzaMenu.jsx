import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const pizzas = [
  {
    title: "Підвішена піца Захиснику",
    description:
      "піца з шинкою, соковитим томатом, маслинами, ароматною зеленню з піца-соусом і сиром моцарела. Підвішена піца буде передана в подарунок нашим Захисникам! Дякуємо!",
    price: 75,
  },
  {
    title: "Піца 'Груша з горгонзолою'",
    description: "сирно-вершковий соус, сир Моцарелла, груша, сир Горгонзола, кунжут",
    price: 179,
  },
  {
    title: "Піца '4 сири'",
    description:
      "сирно-вершковий соус, моцарелла, пармезан, Емменталь, горгонзола, кунжут, волоський горіх, клей рослинний (з насіння льону)",
    price: 209,
  },
  {
    title: "Піца 'Royal Beef'",
    description:
      "томатний піца-соус, моцарелла, кунжут, фарш яловичий, цибуля маринована, перець Халапеньо",
    price: 169,
  },
];

export default function PizzaMenu() {
  const [activeCategory, setActiveCategory] = useState("Піца");

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        <Button onClick={() => setActiveCategory("Піца")} variant="secondary">
          🍕 Піца
        </Button>
        <Button variant="outline">🥗 Салати</Button>
        <Button variant="outline">🍷 Напої</Button>
        <Button variant="outline">🍰 Десерти</Button>
        <Button variant="outline">🥙 Закуски</Button>
      </div>

      <ScrollArea className="h-[600px]">
        {pizzas.map((pizza, index) => (
          <Card key={index} className="mb-4">
            <CardContent className="flex flex-col gap-4 p-4">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{pizza.title}</h2>
                  <p className="text-sm text-gray-600 mt-2">{pizza.description}</p>
                </div>
                <Button className="mt-4 w-fit">від {pizza.price}.00 грн</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
}