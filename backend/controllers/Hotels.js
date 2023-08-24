import Hotel from "../models/Hotels";


const createHotel = async (req, res) => {
  if (!req.body) {
    throw new BadRequestError("fill all fields");
  }
  const savedhotel = await Hotel.save();
  res.status(StatusCodes.CREATED).json(savedhotel);
};
const updateHotel = async (req, res) => {
  if (!req.body) {
    throw new BadRequestError("fill all fields");
  }
  const savedhotel = await Hotel.save();
  res.status(StatusCodes.OK).json(savedhotel);
};

export {createHotel,updateHotel}