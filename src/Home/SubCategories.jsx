import { useLoaderData, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Subcategory from './Subcategory';
import Navbar from '../Shared/Navbar';

const SubCategories = () => {
    const location = useLocation();
    const { subcategory } = location.state || {};

    const crafts = useLoaderData();

    const filteredCrafts = subcategory
        ? crafts.filter(craft => craft.subcategory === subcategory)
        : crafts;

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-200 my-10 py-5 w-full">
                <h2 className="text-6xl font-serif text-center my-10">Art and Crafts</h2>
            </div>
            <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredCrafts.map(craft => (
                    <Subcategory key={craft._id} craft={craft} />
                ))}
            </div>
        </div>
    );
};

SubCategories.propTypes = {
    craft: PropTypes.object
};

export default SubCategories;
