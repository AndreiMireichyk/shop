import './base.scss';


//Polyfill

//- foreach
import 'nodelist-foreach-polyfill';

//- closest
import elementClosest from 'element-closest';
elementClosest(window); // this is used to reference window.Element

// Base components
import header from '../header/header';
import footer from '../footer/footer';
import category from '../category_nav/category_nav';
import basket from '../basket/basket';
import dialog from '../dialog/dialog';

