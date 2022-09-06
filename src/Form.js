import { useState, useRef } from "react";

const Form = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    category: "",
    tags: [],
    images: {
      sm: "",
      md: "",
      lg: "",
    },
    quantity: 0,
  });

  const handleChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const tagRef = useRef();

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      setProduct((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    });
  };

  const handleRemoveTag = (tag) => {
    setProduct((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleIncrease = () => {
    setProduct((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  };

  const hanldeDecrease = () => {
    product.quantity > 0 &&
      setProduct((prev) => ({
        ...prev,
        quantity: prev.quantity - 1,
      }));
  };

  const uploadImg = () => {};

  const handleImage = async () => {
    const res = uploadImg;
    setProduct((prev) => ({
      ...prev,
      images: { sm: res.sm, md: res.md, lg: res.lg },
    }));
  };

  return (
    <div>
      <form>
        <br />
        <br />
        <input
          type="text"
          value={product.title}
          name={"title"}
          placeholder={"Title"}
        />
        <br />
        <br />
        <input
          type="text"
          value={product.desc}
          name={"desc"}
          placeholder={"Desc"}
        />
        <br />
        <br />
        <input
          type="text"
          value={product.price}
          name={"price"}
          placeholder={"Price"}
        />
        <br />
        <br />
        <h3>category</h3>
        <select name="sneakers" id="sneakers">
          <option value="">Sneakers</option>
          <option value="">Yezzy</option>
          <option value="">Fear Of World</option>
          <option value="">Spizikes</option>
          <option value="">Lebrons</option>
        </select>
        <h3>Tags</h3>
        <input type="text-area" />
        <br />
        <br />
        <button>Add Tags</button>
        <br />
        <br />
        <button>-</button>
        <span>Quantity</span>
        <button>+</button>
      </form>
    </div>
  );
};

export default Form;
