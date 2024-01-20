import React, { useEffect, useState } from 'react'
import {
  Button,
  Checkbox,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { CgCloseR } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase';

const ItemDetails = ({open, handleOpen, selectedPhoto}) => {
  const [generateDownloadLink, setGenerateDownloadLink] = useState();
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const navigate = useNavigate();

  useEffect(() => {
    setGenerateDownloadLink(selectedPhoto.webformatURL)
  }, [selectedPhoto]);

  const sizes = [
    { label: 'Small', suffix: '_180', size: '640x180' },
    { label: 'Medium', suffix: '_340', size: '640x340' },
    { label: 'Large', suffix: '_960', size: '1280x1280', url: selectedPhoto.largeImageURL },
    { label: 'Original', suffix: '_640', size: `${selectedPhoto.webformatWidth}x${selectedPhoto.webformatHeight}` },
  ];

  const handleSize = (size) => {
    if(!generateDownloadLink) return;
    if (size.url) {
      setGenerateDownloadLink(size.url);
    } else {
      setGenerateDownloadLink(`${selectedPhoto.webformatURL.replace('_640', size.suffix)}`);
    }
  };

  const handleDownload = async () => {
    if(!user) navigate('/login');
    else {
      const { data, error } = await supabase
          .from('downloadImages')
          .insert({ id: selectedPhoto.id, url: selectedPhoto.webformatURL, userId: user.id })
          .select();

      if(error) console.error(error);
      else console.log(data);

      const link = document.createElement('a');
      link.href = generateDownloadLink;
      link.target = "_blank"
      link.download = selectedPhoto.id + '.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <Dialog open={open} handler={handleOpen} className='bg-white text-black m-12 rounded border w-fit'>
          <DialogHeader className='bg-neutral-100 flex justify-between p-3 text-[21.33px] font-medium'>
            Preview ID: {selectedPhoto.id} 
            <CgCloseR onClick={handleOpen} className='cursor-pointer'/>
          </DialogHeader>

          <div className='md:m-5 m-3'>
            <div className='flex items-center justify-center'>
              <img src={selectedPhoto.webformatURL} className='w-2/3'/>
              <div className='md:ml-5'>
                <div>
                  <div className='font-medium md:text-[21.33px]'>Download</div>

                  <ul className='border rounded my-3 md:w-[350px] w-[300px]'>
                    {sizes.map((size) => (
                      <li key={size.label} className='flex justify-between items-center p-3 border-b'>
                        <div>{size.label}</div>
                        <div className='flex items-center'>
                          <div>{size.size}</div>
                          <input
                            name='size'
                            type='checkbox'
                            className='ml-5 border bg-[#008000]'
                            onChange={() => handleSize(size)}
                            checked={generateDownloadLink === size.url || generateDownloadLink === `${selectedPhoto.webformatURL.replace('_640', size.suffix)}`}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className='md:w-[350px] w-[300px] p-3 bg-[#4BC34B] text-white text-center rounded cursor-pointer' onClick={handleDownload}>
                    Download for free!
                  </div>
                </div>

                <div className='mt-8 md:w-[350px] w-[300px]'>
                  <div className='font-medium md:text-[21.33px]'>Information</div>
                  <div className='grid grid-cols-3 gap-2'>
                      <div className='mt-5'>
                          <div className='text-neutral-700 font-bold'>User</div>
                          <div>{selectedPhoto.user}</div>
                      </div>
                      <div className='mt-5'>
                          <div className='text-neutral-700 font-bold'>User ID</div>
                          <div>{selectedPhoto.user_id}</div>
                      </div>
                      <div className='mt-5'>
                          <div className='text-neutral-700 font-bold'>Type</div>
                          <div>{selectedPhoto.type}</div>
                      </div>
                      <div className='mt-5'>
                          <div className='text-neutral-700 font-bold'>Views</div>
                          <div>{selectedPhoto.views}</div>
                      </div>
                      <div className='mt-5'>
                          <div className='text-neutral-700 font-bold'>Downloads</div>
                          <div>{selectedPhoto.downloads}</div>
                      </div>
                      <div className='mt-5'>
                          <div className='text-neutral-700 font-bold'>Likes</div>
                          <div>{selectedPhoto.likes}</div>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap items-center mt-5'>
              <span className='font-bold mr-2'>Tags:</span>
              {selectedPhoto.tags && selectedPhoto.tags.split(',').map((category, index) => (
                  <div key={index} className='bg-neutral-100 m-1 p-1'>{category}</div>
              ))}
            </div>
          </div>
      </Dialog>
    </div>
  )
}

export default ItemDetails