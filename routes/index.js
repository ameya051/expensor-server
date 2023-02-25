import { Router } from "express";
import passport from "passport";
import AuthRoutes from "./AuthRoutes.js";
import CategoryRoutes from "./CategoryRoutes.js";
import TransactionsRoutes from "./TransactionsRoutes.js";
import UserRoutes from "./UserRoutes.js";
const router = Router();

const auth = passport.authenticate("jwt", { session: false });

router.use("/transaction", auth, TransactionsRoutes);
router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);
router.use("/category", auth, CategoryRoutes);

export default router;
