import prisma from "@/app/lib/db";

// Handle GET request
export async function GET(req, res) {
    try {
        const response = await prisma.navbar.findMany();
        if (!response) {
            throw new Error("No data found");
        }
        res.status(200).json(response);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Handle POST request
export async function POST(req, res) {
    // Handle POST request logic here
}

// Handle PUT request
export async function PUT(req, res) {
    // Handle PUT request logic here
}

// Handle DELETE request
export async function DELETE(req, res) {
    // Handle DELETE request logic here
}
