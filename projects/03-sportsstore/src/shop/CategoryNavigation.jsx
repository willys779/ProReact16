import { Link, NavLink } from "react-router-dom"

export const CategoryNavigation = ({ categories, baseUrl }) => {
  return (
    <>
      <div className="d-grid gap-2">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-primary"
              : isPending
              ? "pending"
              : "btn btn-secondary"
          }
          to={baseUrl}
          end
        >
          All
        </NavLink>
        {categories &&
          categories.map((cat) => (
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "btn btn-primary"
                  : isPending
                  ? "pending"
                  : "btn btn-secondary"
              }
              key={cat.id}
              to={`${baseUrl}/${cat.name.toLowerCase()}`}
            >
              {cat.name}
            </NavLink>
          ))}
      </div>
    </>
  )
}
