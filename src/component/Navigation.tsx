import React from "react";
import { Link, useLocation } from "react-router-dom";
import routerJSON from "../static/api/router.json";
import classNames from "classnames";

const isCurrentPage = classNames(["text-white", "bg-blue-800"]);

const Navigation: React.FC = () => {
  const pathname = useLocation().pathname;
  return (
    <>
      <nav>
        <div className="mt-6 mb-3">
          <ul
            className="flex flex-wrap justify-center md:p-2 sm:rounded-full text-sm md:text-base"
            id="menu_nav"
          >
            {routerJSON.map((router) => {
              return (
                <li
                  key={router.name}
                  className="relative mx-1 px-3 py-1 group bg-white rounded-full mb-1 md:mb-0"
                >
                  <Link
                    // 複数のclassを指定する場合、動的クラスな付与はテンプレートリテラルが便利
                    className={`relative mx-1 px-3 py-1 group rounded-full mb-1 md:mb-0 ${
                      router.path === pathname ? isCurrentPage : "text-blue-800"
                    }`}
                    to={router.path}
                  >
                    {router.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
