import { render, screen, fireEvent } from "../../../utils/test-util";
import { BasketInfo } from "../../basket/basket-info";
import { ProductCard } from "../product-card";

describe("product page component", () => {
  const product = {
    tags: ["Trees"],
    price: 10.99,
    name: "Handcrafted Trees Mug",
    description:
      "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
    slug: "Handcrafted-Trees-Mug",
    added: 1485723766805,
    manufacturer: "OHara-Group",
    itemType: "mug",
  };

  it("can render", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(/Add/i)).toBeInTheDocument();
  });

  it("can handle is item added to basket", () => {
    render(
      <>
        <ProductCard product={product} />
        <BasketInfo />
      </>,
      {
        preloadedState: { product: { items: [product] } },
      }
    );
    fireEvent.click(screen.getByText(/Add/i));
    expect(screen.queryAllByText(/₺ 10.99/i).length > 0).toBeTruthy();
  });
});
