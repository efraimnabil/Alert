import { ReactNode } from "react";
import "./index.scss"
import { X } from 'lucide-react';

interface IProps {
  type: string,
  title: string,
  icon: ReactNode,
  description: string
}

const alert = ({type, title, icon, description}: IProps) => {
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

      <p className='alert-content'>
        {description}
      </p>

    </div>
  )
}

export default alert