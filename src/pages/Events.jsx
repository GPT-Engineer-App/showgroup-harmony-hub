import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const fetchEvents = async () => {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: "Summer Spectacular", date: "2024-07-15", location: "Central Park" },
    { id: 2, name: "Autumn Rhythms", date: "2024-09-22", location: "City Theater" },
    { id: 3, name: "Winter Wonderland Show", date: "2024-12-10", location: "Grand Hall" },
  ];
};

const Events = () => {
  const { data: upcomingEvents, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {upcomingEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Date: {event.date}</p>
              <p className="text-sm text-gray-600">Location: {event.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
