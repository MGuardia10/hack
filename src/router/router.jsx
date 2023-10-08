import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../home/pages/HomePage";
import { HomeRoutes } from "../home/routes/HomeRoutes";
import { AchievementsPage } from "../achievements/pages/AchievementsPage";
import { ShopPage } from "../shop/pages/ShopPage";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeRoutes />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: 'achievements',
          element: <AchievementsPage />
        },
        {
          path: 'shop',
          element: <ShopPage />
        },
        {
          path: '*',
          element: <Navigate to='/' />
        }
      ]
    }
  ])