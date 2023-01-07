import Food from "../../models/food_model.js";


export const addFoods = async (req, res, next) => {

    try {
        // add food into db
        const add_Foods = await Food({ ...req.body });
        await add_Foods.save();
        res.status(201).json({
            message: "Food added successfully",
            success: true,

        });

    } catch (error) {
        next(error);
    }
}

export const getFoods = async (req, res, next) => {

    try {
        // get food details
        const get_Foods = await Food.find();
        res.status(200).json({
            message: "Food details",
            success: true,
            data: get_Foods,

        });

    } catch (error) {
        next(error);
    }
}

export const addBulkFoods = async (req, res, next) => {

    try {
        // add bulk food into db
        const add_Bulk_Foods = await Food.insertMany(req.body);
        res.status(201).json({
            message: "Bulk Food added successfully",
            success: true,

        });

    } catch (error) {
        next(error);
    }
}

export const updateFoods = async (req, res, next) => {

    try {
        // update food details
        const update_Foods = await Food.findByIdAndUpdate(req.body._id, req.body);
        res.status(201).json({
            message: "Food updated successfully",
            success: true,

        });
    } catch (error) {
        next(error);
    }
}

export const deleteFoods = async (req, res, next) => {

    try {
        // delete food details
        const delete_Foods = await Food.findByIdAndDelete(req.params.id);
        res.status(201).json({
            message: "Food deleted successfully",
            success: true,

        });
    } catch (error) {
        next(error);
    }
}

