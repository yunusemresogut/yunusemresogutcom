import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { menuItems } from "./items.tsx";

export default function Links() {
  return (
    <nav>
      <ul className="flex">
        {menuItems.map((item, index) => (
          <li key={index} className="mr-4">
            <NavLink to={item.path}>
              {({ isActive }) => (
                <div
                  className={classNames(
                    "transition-colors hover:text-gray-200",
                    {
                      "text-gray-200": isActive,
                    }
                  )}
                >
                  {item.name}
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
