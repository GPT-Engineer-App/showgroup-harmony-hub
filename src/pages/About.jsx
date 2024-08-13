import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const members = [
    { id: 1, name: "John Doe", role: "Lead Vocalist" },
    { id: 2, name: "Jane Smith", role: "Guitarist" },
    { id: 3, name: "Mike Johnson", role: "Drummer" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">About Our Showgroup</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-gray-700">
          Founded in 2010, our showgroup has been entertaining audiences worldwide with our unique blend of music and performance art. We've performed in over 30 countries and continue to push the boundaries of live entertainment.
        </p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
