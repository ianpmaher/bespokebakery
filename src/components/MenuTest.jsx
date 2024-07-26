import { useState } from "react";
import menuList from "../assets/MenuList";

const MenuTest = () => {
    const [openIndex, setOpenIndex] = useState(null); // State to track which item is open

    const data = menuList.categories;

    const toggleAccordion = (index) => {
        if (index === openIndex) {
            setOpenIndex(null); // Collapse if clicking on the same item
        } else {
            setOpenIndex(index); // Expand the clicked item
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Menu Test</h1>
            {data.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start mb-2">
                    <h2
                        onClick={() => toggleAccordion(index)}
                        className="text-2xl font-semibold cursor-pointer p-2 hover:bg-gray-100 transition-colors flex-shrink-0"
                    >
                        {item.name}
                    </h2>
                    {/* Render subitems only if the index matches openIndex */}
                    {openIndex === index && (
                        <div className="flex-1 pl-4">
                            <ul>
                                {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex} className="border-b border-gray-300 py-2">
                                        <h3 className="text-xl font-medium">{subItem.name}</h3>
                                        <p>
                                            ingredients:
                                            <span className="font-bold ml-1">{subItem.ingredients.join(", ")}</span>
                                        </p>
                                        <p className="mt-1">
                                            price: <span>{subItem.price}</span>
                                        </p>
                                        <p className="mt-1">
                                            allergens? <span>{subItem.allergens.join(", ")}</span>
                                        </p>
                                        <p className="mt-1">
                                            gluten?{" "}
                                            <span>{subItem.gluten_free ? "Gluten Free" : "Contains Gluten"}</span>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MenuTest;
