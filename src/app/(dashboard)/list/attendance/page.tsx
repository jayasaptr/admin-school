// import Pagination from "@/components/Pagination"
// import Table from "@/components/Table"
// import TableSearch from "@/components/TableSearch"
// import { assignmentsData, examsData, parentsData, resultsData, role } from "@/lib/data"
// import Image from "next/image"
// import Link from "next/link"

// type Result = {
//   id: number;
//   subject: string;
//   class: string;
//   teacher:string;
//   student:string;
//   date:string;
//   type:string;
//   score:number;
// }

// const columns = [
//   {
//     header : "Subject Name",
//     accessor : "subjectName",
//   },
//   {
//     header : "Class",
//     accessor : "class",
//     className : "hidden lg:table-cell"
//   },
//   {
//     header : "Teacher",
//     accessor : "teacher",
//     className : "hidden lg:table-cell"
//   },
//   {
//     header : "Student",
//     accessor : "student",
//     className : "hidden lg:table-cell"
//   },
//   {
//     header : "Date",
//     accessor : "date",
//     className : "hidden lg:table-cell"
//   },
//   {
//     header : "Type",
//     accessor : "type",
//     className : "hidden lg:table-cell"
//   },
//   {
//     header : "Score",
//     accessor : "score",
//     className : "hidden lg:table-cell"
//   },
//   {
//     header : "Action",
//     accessor : "action",
//   },
// ]

// const AssignmentPageList = () => {

//   const renderRow = (item :Result) => (
//     <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gibsPurpleLight">
//       <td className="flex items-center gap-4 p-4">
//       {item.subject}
//       </td>
//       <td className="hidden lg:table-cell">{item.class}</td>
//       <td className="hidden lg:table-cell">{item.teacher}</td>
//       <td className="hidden lg:table-cell">{item.student}</td>
//       <td className="hidden lg:table-cell">{item.date}</td>
//       <td className="hidden lg:table-cell">{item.type}</td>
//       <td className="hidden lg:table-cell">{item.score}</td>
//       <td>
//         <div className="flex items-center gap-2">
//           <Link href={`/list/teachers/${item.id}`}>
//             <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gibSky">
//               <Image src="/edit.png" alt="" width={16} height={16} />
//             </button>
//           </Link>
//           {role === "admin" && (<Link href={`/list/teachers/${item.id}`}>
//             <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gibsPurple">
//               <Image src="/delete.png" alt="" width={16} height={16} />
//             </button>
//           </Link>)}
//         </div>
//       </td>
//     </tr>
//   )

//   return (
//     <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
//       {/* Top Section */}
//       <div className="flex items-center justify-between">
//         <h1 className="text-lg font-semibold hidden md:block">All Assignment</h1>
//         <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
//           <TableSearch/>
//           <div className="flex gap-4 items-center self-end">
//             <button className="flex items-center w-8 h-8 justify-center rounded-full bg-gibsYellow">
//               <Image src="/filter.png" alt="" width={14} height={14} />
//             </button>
//             <button className="flex items-center w-8 h-8 justify-center rounded-full bg-gibsYellow">
//               <Image src="/sort.png" alt="" width={14} height={14} />
//             </button>
//             {role === "admin" && (<button className="flex items-center w-8 h-8 justify-center rounded-full bg-gibsYellow">
//               <Image src="/plus.png" alt="" width={14} height={14} />
//             </button>)}
//           </div>
//         </div>
//       </div>
//       {/* List */}
//       <Table columns={columns} renderRow={renderRow} data={}/>
//       {/* Pagination */}
//       <Pagination/>
//     </div>
//   )
// }

// export default AssignmentPageList
