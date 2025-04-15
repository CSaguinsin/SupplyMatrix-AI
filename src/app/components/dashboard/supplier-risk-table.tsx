import { AlertTriangle, ArrowUpDown, MapPin, MoreHorizontal, Shield } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function SupplierRiskTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[250px]">Supplier</TableHead>
          <TableHead>
            <div className="flex items-center gap-1">
              Risk Score
              <Button variant="ghost" size="sm" className="h-8 p-0">
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </div>
          </TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Shenzhen Electronics Ltd.</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-medium text-red-700">
                87
              </span>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Shenzhen, China</span>
            </div>
          </TableCell>
          <TableCell>Electronics</TableCell>
          <TableCell>
            <Badge variant="destructive">High Risk</Badge>
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>View Alternatives</DropdownMenuItem>
                <DropdownMenuItem>Contact Supplier</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Rotterdam Logistics B.V.</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-medium text-red-700">
                82
              </span>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Rotterdam, Netherlands</span>
            </div>
          </TableCell>
          <TableCell>Logistics</TableCell>
          <TableCell>
            <Badge variant="destructive">High Risk</Badge>
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>View Alternatives</DropdownMenuItem>
                <DropdownMenuItem>Contact Supplier</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Mexico City Manufacturing</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-medium text-amber-700">
                65
              </span>
              <AlertTriangle className="h-4 w-4 text-amber-600" />
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Mexico City, Mexico</span>
            </div>
          </TableCell>
          <TableCell>Automotive Parts</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-amber-100 text-amber-800">
              Medium Risk
            </Badge>
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>View Alternatives</DropdownMenuItem>
                <DropdownMenuItem>Contact Supplier</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Vietnam Tech Solutions</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-700">
                32
              </span>
              <Shield className="h-4 w-4 text-green-600" />
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Ho Chi Minh City, Vietnam</span>
            </div>
          </TableCell>
          <TableCell>Electronics</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-green-100 text-green-800">
              Low Risk
            </Badge>
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>View Alternatives</DropdownMenuItem>
                <DropdownMenuItem>Contact Supplier</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">German Precision GmbH</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-700">
                28
              </span>
              <Shield className="h-4 w-4 text-green-600" />
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Munich, Germany</span>
            </div>
          </TableCell>
          <TableCell>Precision Parts</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-green-100 text-green-800">
              Low Risk
            </Badge>
          </TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>View Alternatives</DropdownMenuItem>
                <DropdownMenuItem>Contact Supplier</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
