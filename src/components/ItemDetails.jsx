import React from 'react'
import {
  Button,
  Checkbox,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { CgCloseR } from "react-icons/cg";

const ItemDetails = ({open, handleOpen, selectedPhoto}) => {
  console.log(selectedPhoto);
  return (
    <div>
      <Dialog open={open} handler={handleOpen} className='bg-white text-black m-12 rounded border w-fit'>
          <DialogHeader className='bg-neutral-100 flex justify-between p-3 text-[21.33px] font-medium'>
            Preview ID: {selectedPhoto.id} 
            <CgCloseR onClick={handleOpen} className='cursor-pointer'/>
          </DialogHeader>

          <div className='m-5'>
            <div className='flex items-center justify-center'>
              <img src={selectedPhoto.userImageURL} className='w-2/3'/>
              <div className='ml-5'>
                <div>
                  <div className='font-medium text-[21.33px]'>Download</div>

                  <div className='border rounded my-3 w-[350px]'>
                    <div className='flex justify-between items-center p-3 border-b bg-neutral-100'>
                      <div>Small</div>
                      <div className='flex items-center'>
                        <div>640x960</div>
                        <input type='checkbox' className='ml-5 border bg-[#008000]' checked/>
                      </div>
                    </div>
                    <div className='flex justify-between items-center p-3 border-b'>
                      <div>Medium</div>
                      <div className='flex items-center'>
                        <div>1920x2660</div>
                        <input type='checkbox' className='ml-5 border bg-[#008000]'/>
                      </div>
                    </div>
                    <div className='flex justify-between items-center p-3 border-b'>
                      <div>Big</div>
                      <div className='flex items-center'>
                        <div>2400x3600</div>
                        <input type='checkbox' className='ml-5 border bg-[#008000]'/>
                      </div>
                    </div>
                    <div className='flex justify-between items-center p-3'>
                      <div>Original</div>
                      <div className='flex items-center'>
                        <div>3850x5640</div>
                        <input type='checkbox' className='ml-5 border bg-[#008000]'/>
                      </div>
                    </div>
                  </div>

                  <div className='w-[350px] p-3 bg-[#4BC34B] text-white text-center rounded cursor-pointer'>
                    Download for free!
                  </div>
                </div>

                <div className='mt-8 w-[350px]'>
                  <div className='font-medium text-[21.33px]'>Information</div>
                  <div className='grid grid-cols-3 gap-12'>
                    <div className='mt-5'>
                      <div className='text-neutral-700'>User</div>
                      <div className='font-bold'>{selectedPhoto.user}</div>
                    </div>
                    <div className='mt-5'>
                      <div className='text-neutral-700'>User ID</div>
                      <div className='font-bold'>{selectedPhoto.user_id}</div>
                    </div>
                    <div className='mt-5'>
                      <div className='text-neutral-700'>Type</div>
                      <div className='font-bold'>{selectedPhoto.type}</div>
                    </div>
                    <div className='mt-5'>
                      <div className='text-neutral-700'>Views</div>
                      <div className='font-bold'>{selectedPhoto.views}</div>
                    </div>
                    <div className='mt-5'>
                      <div className='text-neutral-700'>Downloads</div>
                      <div className='font-bold'>{selectedPhoto.downloads}</div>
                    </div>
                    <div className='mt-5'>
                      <div className='text-neutral-700'>Likes</div>
                      <div className='font-bold'>{selectedPhoto.likes}</div>
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