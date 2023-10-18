import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineDown } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { VscBellDot } from 'react-icons/vsc';
import { Avatar, Image } from '@chakra-ui/react';

import { images } from '../../constants';
import { Card } from '../../exports/exports';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <motion.div
      className="app__dashboard"
      key="app__dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.5,
      }}
    >
      <div className="app__dashboard-header">
        <div className="menu">
          <FaBars />
        </div>

        <div className="info">
          <VscBellDot />

          <div className="name-mail">
            <h3>Adekunle Adebona</h3>
            <p>adekunke.adebona@creditwaveng.com</p>
          </div>

          <Avatar name="Adekunle Adebona" />
          <AiOutlineDown />
        </div>
      </div>

      <div className="app__dashboard-content">
        <div className="welcome-container">
          <div className="message">
            <div className="inner-message">
              <h1>Wecome back, Kenny!</h1>
              <p>Your last login was 12:00pm 9th July, 2023</p>
            </div>

            <div className="image">
              <Image src={images.dashboard} />
            </div>
          </div>

          <Card className="avatar">
            <Avatar name="Adekunle Adebona" size="lg" />
          </Card>
        </div>

        <div className="application-container">
          <Card className="application">
            <div className="flex items-center justify-between"></div>
          </Card>

          <div className="helper"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
