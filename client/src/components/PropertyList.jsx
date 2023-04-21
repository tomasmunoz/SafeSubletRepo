import React from 'react';
import PropertyContainer from './PropertyContainer';

function PropertyList() {
  return (
    <section class="py-6 bg-gray-100">
      <div class="container">
        <div class="row">
          <PropertyContainer>
            <span>House</span>
            <span>Shared Coworking</span>
            <span>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.</span>
          </PropertyContainer>
          <PropertyContainer>
            <span>Office</span>
            <span>Really Housekeeping</span>
            <span>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.</span>
          </PropertyContainer>
          <PropertyContainer>
            <span>Hub</span>
            <span>Coworking Office</span>
            <span>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.</span>
          </PropertyContainer>
        </div>
      </div>
    </section>
  );
}

export default PropertyList;
