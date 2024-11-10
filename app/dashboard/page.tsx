"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!session) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {session.user?.name || session.user?.email}</h1>
          <p className="mt-2 text-gray-600">Your learning dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* In Progress Courses */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">In Progress</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Introduction to Web Development</h3>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 rounded-full h-2 w-2/3"></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">67% Complete</p>
              </div>
              <Button className="w-full">Continue Learning</Button>
            </div>
          </div>

          {/* Available Courses */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Advanced JavaScript</h3>
                <p className="text-sm text-gray-600 mt-1">Master modern JavaScript concepts</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">React Fundamentals</h3>
                <p className="text-sm text-gray-600 mt-1">Learn React from scratch</p>
              </div>
              <Button variant="outline" className="w-full">Browse All Courses</Button>
            </div>
          </div>

          {/* Learning Stats */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Courses Completed</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Hours Learned</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Certificates Earned</span>
                <span className="font-medium">2</span>
              </div>
              <Button variant="outline" className="w-full">View Certificates</Button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium">Completed Module: CSS Flexbox</p>
                <p className="text-sm text-gray-600">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium">Started Course: React Fundamentals</p>
                <p className="text-sm text-gray-600">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
