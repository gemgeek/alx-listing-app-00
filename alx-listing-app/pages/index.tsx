import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">ALX Listing App</h1>

      <Card
        title="Cozy Apartment"
        description="A beautiful place to stay in Accra."
        imageUrl="/assets/sample-house.jpg"
      />

      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert('Booking...')} />
      </div>
    </div>
  );
}