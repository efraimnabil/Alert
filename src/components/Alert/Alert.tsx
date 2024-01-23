import { ReactNode } from "react";
import "./index.scss"
import { X } from 'lucide-react';
import { alertTypes } from "../../types";

interface IProps {
  type: alertTypes,
  title: string,
  icon: ReactNode,
  description?: string,
  children?: ReactNode
}

const alert = ({type, title, icon, description, children}: IProps) => {
  return (
    <div className={type}>
      
      <div className='alert-header'>
        <div className='title'>
          <span>
            {icon}
          </span>

          <h4>{title}</h4>
        </div>
        
        <X size={24} />
      </div>

        { children ? children : <p> {description} </p> }
    </div>
  )
}

export default alert